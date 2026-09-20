import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo3gx290o.css';
import '../../css/g/gsrjgt57b.css';
import '../../css/b/bkgcmdf_k.css';
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
		"content": `<path class="eo3gx290o"/><path class="gsrjgt57b"/><path class="bkgcmdf_k"/><path class="kxqbvcc2z"/><path class="h39rjmbwt"/><path class="x3jv5h8ph"/><path class="glg778air"/>`,
		"fallback": "openmoji:person-tipping-hand-dark-skin-tone",
	});
}

export default Component;
