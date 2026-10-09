import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1np659_m.css';
import '../../css/n/n180x7juo.css';
import '../../css/j/jwnchgn9i.css';
import '../../css/j/j8k9-bcng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1np659_m"/><path class="n180x7juo"/><path class="jwnchgn9i"/><path class="j8k9-bcng"/>`,
		"fallback": "energy-icons:portable-solar-20-bold",
	});
}

export default Component;
