import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v-p85cctf.css';
import '../../css/e/ec-b4pmcq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAycsKciL"><g class="wwvp95byt"><path class="v-p85cctf"/><path class="ec-b4pmcq"/></g></mask></defs><path mask="url(#SVGAycsKciL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:nintendo-switch",
	});
}

export default Component;
