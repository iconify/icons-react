import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6f2kgb8d.css';
import '../../css/z/zd03hic5e.css';
import '../../css/f/frzwfx42e.css';
import '../../css/r/rl4r9ofhj.css';
import '../../css/w/wugkd2rdg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6f2kgb8d"/><path class="zd03hic5e"/><path class="frzwfx42e"/><path class="rl4r9ofhj"/><path class="wugkd2rdg"/>`,
		"fallback": "energy-icons:transistor-20",
	});
}

export default Component;
