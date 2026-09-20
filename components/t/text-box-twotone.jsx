import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/s/senrzp.css';
import '../../css/c/c5crzc.css';
import '../../css/y/y4wbml.css';
import '../../css/y/y8_5_i.css';
import '../../css/s/sqhhwo.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew senrzp"/><path class="c5crzc iw1iew y4wbml"/><path class="iw1iew y4wbml y8_5_i"/><path class="iw1iew sqhhwo y4wbml"/>`,
		"fallback": "line-md:text-box-twotone",
	});
}

export default Component;
