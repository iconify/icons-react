import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvs3strwr.css';
import '../../css/h/hmm9q7hvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uvs3strwr"/><path class="hmm9q7hvm"/></g>`,
		"fallback": "streamline-ultimate:office-clipper",
	});
}

export default Component;
