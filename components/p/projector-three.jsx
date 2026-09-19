import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hiowjvb0p.css';
import '../../css/m/mh9t29bel.css';
import '../../css/u/ujlhpwb_p.css';
import '../../css/c/ct6xmllof.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3qYrxemQ"><g class="ft5dv1b6b"><path class="hiowjvb0p"/><path class="mh9t29bel"/><path class="ujlhpwb_p"/><path class="ct6xmllof"/></g></mask></defs><path mask="url(#SVG3qYrxemQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:projector-three",
	});
}

export default Component;
