import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tacaomvbw.css';
import '../../css/c/ckfmp0bvq.css';
import '../../css/y/yi7l1_bae.css';
import '../../css/b/brv_2tt_f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tacaomvbw"/><path class="ckfmp0bvq"/><path class="yi7l1_bae"/><path class="brv_2tt_f"/>`,
		"fallback": "devicon:pulumi-wordmark",
	});
}

export default Component;
