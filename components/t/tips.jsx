import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/ven960eol.css';
import '../../css/f/fmc-dpppl.css';
import '../../css/o/ocv1-uqro.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCrHiRbFp"><g class="wwvp95byt"><path class="ven960eol"/><path class="fmc-dpppl"/><path class="ocv1-uqro"/></g></mask></defs><path mask="url(#SVGCrHiRbFp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tips",
	});
}

export default Component;
