import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzseqcwrs.css';
import '../../css/m/myskqwb-c.css';
import '../../css/h/hohkujz8t.css';
import '../../css/j/jxa_5vbkb.css';
import '../../css/s/stktq5xsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzseqcwrs"/><path class="myskqwb-c"/><path class="hohkujz8t"/><path class="jxa_5vbkb"/><path class="stktq5xsd"/>`,
		"fallback": "thesvg-color:sensenova",
	});
}

export default Component;
