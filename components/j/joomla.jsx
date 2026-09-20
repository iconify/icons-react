import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muz_ezbtz.css';
import '../../css/w/w21ld6b4s.css';
import '../../css/k/kxk-2wido.css';
import '../../css/n/n2j8p5b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muz_ezbtz"/><path class="w21ld6b4s"/><path class="kxk-2wido"/><path class="n2j8p5b2m"/>`,
		"fallback": "lineicons:joomla",
	});
}

export default Component;
