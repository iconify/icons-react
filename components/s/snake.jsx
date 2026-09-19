import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eevefobbg.css';
import '../../css/v/vh_x9ccjq.css';
import '../../css/b/bku4shbfc.css';
import '../../css/l/lob6lbb2k.css';
import '../../css/g/gbkh3v4as.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eevefobbg"/><path class="vh_x9ccjq"/><path class="bku4shbfc"/><path class="lob6lbb2k"/><circle class="gbkh3v4as"/>`,
		"fallback": "fxemoji:snake",
	});
}

export default Component;
