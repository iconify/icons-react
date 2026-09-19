import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzqxore6r.css';
import '../../css/i/i6-ceabdw.css';
import '../../css/i/itgcd8bme.css';
import '../../css/p/p6-i0mbfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uzqxore6r"/><path class="i6-ceabdw"/><circle class="itgcd8bme"/><path class="p6-i0mbfr"/>`,
		"fallback": "ion:ios-switch",
	});
}

export default Component;
