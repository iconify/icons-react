import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uni_f1bqr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLikcWbzl"><path class="uni_f1bqr"/></mask></defs><path mask="url(#SVGLikcWbzl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pentagon-one",
	});
}

export default Component;
