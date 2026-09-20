import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/w/wt2vw6bnd.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzd5vjbdu.css';
import '../../css/c/czevsmbir.css';
import '../../css/s/sdc8eobgo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGXkvBFmaa" class="n1mjunbsu"><path class="wt2vw6bnd"/></mask><g class="ft5dv1b6b"><path class="nzd5vjbdu"/><path mask="url(#SVGXkvBFmaa)" class="czevsmbir"/><path clip-rule="evenodd" class="sdc8eobgo"/></g>`,
		"fallback": "quill:nuclear",
	});
}

export default Component;
