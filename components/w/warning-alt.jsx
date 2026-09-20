import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rlqfkfbif.css';
import '../../css/f/flen3tbdj.css';
import '../../css/u/uznvvccio.css';
import '../../css/k/k68kh8b5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG9GYF5cpU" class="n1mjunbsu"><path class="rlqfkfbif"/></mask><g class="flen3tbdj"><path class="uznvvccio"/><path mask="url(#SVG9GYF5cpU)" class="k68kh8b5h"/></g>`,
		"fallback": "quill:warning-alt",
	});
}

export default Component;
