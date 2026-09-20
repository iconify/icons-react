import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo3gx290o.css';
import '../../css/g/gbto1jblf.css';
import '../../css/m/mkomp9b1g.css';
import '../../css/k/kxqbvcc2z.css';
import '../../css/h/h39rjmbwt.css';
import '../../css/x/x3jv5h8ph.css';
import '../../css/g/glg778air.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo3gx290o"/><path class="gbto1jblf"/><path class="mkomp9b1g"/><path class="kxqbvcc2z"/><path class="h39rjmbwt"/><path class="x3jv5h8ph"/><path class="glg778air"/>`,
		"fallback": "openmoji:person-tipping-hand",
	});
}

export default Component;
