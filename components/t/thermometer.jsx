import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x72lhr09f.css';
import '../../css/l/lk2ofkevo.css';
import '../../css/p/phv42t7gn.css';
import '../../css/i/i4tp2acwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x72lhr09f"/><path class="lk2ofkevo"/><path class="phv42t7gn"/><path class="i4tp2acwn"/></g>`,
		"fallback": "fluent-emoji-flat:thermometer",
	});
}

export default Component;
