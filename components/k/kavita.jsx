import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj9rz1bku.css';
import '../../css/n/ni01k9bte.css';
import '../../css/q/q5q14ccnk.css';
import '../../css/l/l87gg1umh.css';
import '../../css/a/afb15p7wi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj9rz1bku"/><path class="ni01k9bte"/><path class="q5q14ccnk"/><path class="l87gg1umh"/><path class="afb15p7wi"/>`,
		"fallback": "selfhst:kavita",
	});
}

export default Component;
