import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qrqa4j2-g.css';
import '../../css/m/mdfd69mwt.css';
import '../../css/e/eb3peub-j.css';
import '../../css/m/m-2iqioyf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf5iufcGu"><g class="v3_i3wktz"><path class="qrqa4j2-g"/><path class="mdfd69mwt"/><path class="eb3peub-j"/><path class="m-2iqioyf"/></g></mask></defs><path mask="url(#SVGf5iufcGu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:screenshot",
	});
}

export default Component;
