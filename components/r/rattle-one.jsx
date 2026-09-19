import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c427p_bvc.css';
import '../../css/l/lm8wm8y6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG545pnVmb"><g class="aql7dnt-u"><circle transform="rotate(40 29.463 16.989)" class="c427p_bvc"/><path class="lm8wm8y6h"/></g></mask></defs><path mask="url(#SVG545pnVmb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rattle-one",
	});
}

export default Component;
