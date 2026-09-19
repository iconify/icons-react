import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j7dfqjbmm.css';
import '../../css/m/md286fbip.css';
import '../../css/m/mnclqej_r.css';
import '../../css/t/t78b-pbku.css';
import '../../css/n/nvrchz51g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="j7dfqjbmm"/><g transform="translate(5 5)" class="md286fbip"><path class="mnclqej_r"/><circle class="t78b-pbku"/><path class="nvrchz51g"/></g></g>`,
		"fallback": "cryptocurrency-color:ong",
	});
}

export default Component;
