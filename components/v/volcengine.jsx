import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz7x-rb-m.css';
import '../../css/q/qk8x-bb5p.css';
import '../../css/a/akdxg9upc.css';
import '../../css/m/mz595l-ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz7x-rb-m"/><path class="qk8x-bb5p"/><path class="akdxg9upc"/><path class="mz595l-ia"/>`,
		"fallback": "thesvg-color:volcengine",
	});
}

export default Component;
