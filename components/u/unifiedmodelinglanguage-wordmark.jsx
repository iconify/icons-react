import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxpgx8bbz.css';
import '../../css/p/plw4n8b9a.css';
import '../../css/z/zu45hdb1f.css';
import '../../css/y/yj9rp25pc.css';
import '../../css/u/u080qgbrm.css';
import '../../css/g/glrmtpy1f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxpgx8bbz"/><path class="plw4n8b9a"/><path class="zu45hdb1f"/><path class="yj9rp25pc"/><path class="u080qgbrm"/><path class="glrmtpy1f"/>`,
		"fallback": "devicon:unifiedmodelinglanguage-wordmark",
	});
}

export default Component;
