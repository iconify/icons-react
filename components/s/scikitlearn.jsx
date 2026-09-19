import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtm-4pbpn.css';
import '../../css/d/dh1shqbdr.css';
import '../../css/u/usdnfabrq.css';
import '../../css/z/ze7q12bdp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtm-4pbpn"/><path class="dh1shqbdr"/><path class="usdnfabrq"/><path class="ze7q12bdp"/>`,
		"fallback": "devicon:scikitlearn",
	});
}

export default Component;
