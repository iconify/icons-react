import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr70o2bnl.css';
import '../../css/n/nqu-0evvj.css';
import '../../css/k/kqeot6bhn.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGexzpqcxm"><g class="ft5dv1b6b"><path class="gr70o2bnl"/><path clip-rule="evenodd" class="nqu-0evvj"/><path class="kqeot6bhn"/></g></mask></defs><path mask="url(#SVGexzpqcxm)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:tree-duotone",
	});
}

export default Component;
