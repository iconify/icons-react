import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/khaj5_bao.css';
import '../../css/q/qm5u6kboc.css';
import '../../css/j/jfg1lmblt.css';
import '../../css/t/tw64bqv6e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzamU61cz"><g class="aql7dnt-u"><path class="khaj5_bao"/><path class="qm5u6kboc"/><path class="jfg1lmblt"/><path class="tw64bqv6e"/></g></mask></defs><path mask="url(#SVGzamU61cz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:milk-one",
	});
}

export default Component;
