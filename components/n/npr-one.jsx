import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2qqdgbpq.css';
import '../../css/b/br20uj0za.css';
import '../../css/x/xoju9kbwz.css';
import '../../css/c/c1i9a_s6v.css';
import '../../css/i/izwhq371e.css';
import '../../css/t/tzdqv4zfa.css';
import '../../css/a/azsbrybsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2qqdgbpq"/><path class="br20uj0za"/><path class="xoju9kbwz"/><path class="c1i9a_s6v"/><path class="izwhq371e"/><path class="tzdqv4zfa"/><path class="azsbrybsa"/>`,
		"fallback": "selfhst:npr-one",
	});
}

export default Component;
