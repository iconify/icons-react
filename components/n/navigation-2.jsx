import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx-fqcbrz.css';
import '../../css/z/zyr9tjbek.css';
import '../../css/f/f1ge8bb-b.css';
import '../../css/h/haaxscqwv.css';
import '../../css/w/w23tfpzak.css';
import '../../css/l/liczzd6oq.css';
import '../../css/z/z3647b8sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx-fqcbrz wm-shadow"/><path class="zyr9tjbek"/><path class="f1ge8bb-b"/><path class="haaxscqwv"/><path class="w23tfpzak"/><path class="liczzd6oq wm-shine"/><path class="z3647b8sw"/>`,
		"fallback": "withicons-plush:navigation-2",
	});
}

export default Component;
