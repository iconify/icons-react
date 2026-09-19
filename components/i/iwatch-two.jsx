import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx1fmmb4e.css';
import '../../css/e/e6ug7etno.css';
import '../../css/v/v98sb2usu.css';
import '../../css/b/bomlk53dk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAIc3Obvc"><g class="ft5dv1b6b"><path class="rx1fmmb4e"/><rect class="e6ug7etno"/><rect transform="rotate(90 13 18)" class="v98sb2usu"/><rect transform="rotate(90 13 25)" class="bomlk53dk"/></g></mask></defs><path mask="url(#SVGAIc3Obvc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:iwatch-two",
	});
}

export default Component;
