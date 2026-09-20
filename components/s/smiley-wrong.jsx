import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y54er8bmd.css';
import '../../css/a/asifw5bne.css';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGzqMQVdtE" class="y54er8bmd"/><path id="SVGHGSBDebM" class="asifw5bne"/></defs><g class="hntgybcog"><use href="#SVGzqMQVdtE"/><use href="#SVGHGSBDebM"/><use href="#SVGzqMQVdtE"/><use href="#SVGHGSBDebM"/></g>`,
		"fallback": "streamline-ultimate:smiley-wrong",
	});
}

export default Component;
