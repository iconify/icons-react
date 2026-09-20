import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgbjmi6pp.css';
import '../../css/v/vmig3tl9v.css';
import '../../css/a/af2s08bbb.css';
import '../../css/g/g8foefw4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGfory69zG" class="mgbjmi6pp"/></defs><path class="vmig3tl9v"/><path class="af2s08bbb"/><use href="#SVGfory69zG"/><path class="g8foefw4k"/><use href="#SVGfory69zG"/>`,
		"fallback": "mage:screencast-fill",
	});
}

export default Component;
