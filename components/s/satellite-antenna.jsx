import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzh9jab4e.css';
import '../../css/x/xgxez57el.css';
import '../../css/o/op9lgabft.css';
import '../../css/c/cgesmtbtm.css';
import '../../css/u/udtal0o8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vzh9jab4e"/><path class="xgxez57el"/><path class="op9lgabft"/><path class="cgesmtbtm"/><path class="udtal0o8w"/></g>`,
		"fallback": "fluent-emoji-flat:satellite-antenna",
	});
}

export default Component;
