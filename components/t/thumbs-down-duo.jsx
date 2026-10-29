import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jaokbwnxj.css';
import '../../css/l/lab3a5b9w.css';
import '../../css/m/mezep8bdy.css';
import '../../css/b/bos983bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jaokbwnxj"/><path class="lab3a5b9w wm-a"/><path class="mezep8bdy wm-a"/><path class="bos983bva"/></g>`,
		"fallback": "withicons:thumbs-down-duo",
	});
}

export default Component;
