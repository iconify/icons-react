import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gffnzrbyj.css';
import '../../css/d/d3xlh_egt.css';
import '../../css/b/bhb3myb5w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gffnzrbyj"/><path class="d3xlh_egt"/><path class="bhb3myb5w"/>`,
		"fallback": "energy-icons:transformer-20-bold",
	});
}

export default Component;
