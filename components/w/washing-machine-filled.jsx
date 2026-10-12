import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9gf4ebfj.css';
import '../../css/h/hnvtq9frh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9gf4ebfj"/><path clip-rule="evenodd" class="hnvtq9frh"/>`,
		"fallback": "lucide-extended:washing-machine-filled",
	});
}

export default Component;
