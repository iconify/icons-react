import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fm2hmbc6h.css';
import '../../css/g/ge2jsqbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fm2hmbc6h"/><path class="ge2jsqbvb"/></g>`,
		"fallback": "lucide:mound-shovel",
	});
}

export default Component;
