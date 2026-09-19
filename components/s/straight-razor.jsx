import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/i-i165bfu.css';
import '../../css/c/c2klbob3g.css';
import '../../css/q/qn3ju2bkm.css';
import '../../css/q/q7yzux5pm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN8KK4crL"><g class="aql7dnt-u"><rect transform="rotate(-10 3.61 36.534)" class="i-i165bfu"/><path class="c2klbob3g"/><path class="qn3ju2bkm"/><path class="q7yzux5pm"/></g></mask></defs><path mask="url(#SVGN8KK4crL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:straight-razor",
	});
}

export default Component;
