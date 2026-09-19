import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuixw-bhr.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vboo6ubhn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o5v5dgu4m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG30fSr5dC" class="tuixw-bhr"/><mask id="SVGmuJ1AerM"><g class="ft5dv1b6b"><path class="vboo6ubhn"/><use href="#SVG30fSr5dC"/><use href="#SVG30fSr5dC" clip-rule="evenodd" class="d2kvgvbvc"/><path class="o5v5dgu4m"/></g></mask></defs><path mask="url(#SVGmuJ1AerM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:steering-wheel",
	});
}

export default Component;
