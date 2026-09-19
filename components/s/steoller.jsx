import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/x6q0du3xx.css';
import '../../css/i/io590qi1v.css';
import '../../css/y/yiugx4bbn.css';
import '../../css/q/qfm_c3nif.css';
import '../../css/n/nwm-s43qg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsctYKdJd"><g class="aql7dnt-u"><path class="x6q0du3xx"/><path class="io590qi1v"/><circle class="yiugx4bbn"/><circle class="qfm_c3nif"/><path class="nwm-s43qg"/></g></mask></defs><path mask="url(#SVGsctYKdJd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:steoller",
	});
}

export default Component;
