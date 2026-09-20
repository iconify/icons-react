import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxmhkjbxg.css';
import '../../css/c/cv78y-btj.css';
import '../../css/z/z9rvppbnc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxmhkjbxg"/><path class="cv78y-btj"/><path class="z9rvppbnc"/>`,
		"fallback": "medical-icon:ophthalmology",
	});
}

export default Component;
