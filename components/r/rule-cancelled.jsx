import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3p-e2bku.css';
import '../../css/r/rrl70bbti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3p-e2bku"/><path class="rrl70bbti"/>`,
		"fallback": "carbon:rule-cancelled",
	});
}

export default Component;
