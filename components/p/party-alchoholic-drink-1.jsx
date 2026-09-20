import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t7g4c4b4t.css';
import '../../css/f/fck45lbed.css';
import '../../css/q/qjevf9b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t7g4c4b4t"/><path class="fck45lbed"/><path class="qjevf9b9f"/></g>`,
		"fallback": "streamline-freehand-color:party-alchoholic-drink-1",
	});
}

export default Component;
