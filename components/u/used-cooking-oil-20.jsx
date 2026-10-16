import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdb19jl6q.css';
import '../../css/q/q037hgbfp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdb19jl6q"/><path class="q037hgbfp"/>`,
		"fallback": "energy-icons:used-cooking-oil-20",
	});
}

export default Component;
