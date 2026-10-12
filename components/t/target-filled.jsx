import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufmb-0o7z.css';
import '../../css/t/tnufrjb2z.css';
import '../../css/f/f2gaakbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufmb-0o7z"/><path clip-rule="evenodd" class="tnufrjb2z"/><path clip-rule="evenodd" class="f2gaakbew"/>`,
		"fallback": "lucide-extended:target-filled",
	});
}

export default Component;
