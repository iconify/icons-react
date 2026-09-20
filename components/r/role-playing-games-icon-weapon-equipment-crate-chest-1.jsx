import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f8_yxzbej.css';
import '../../css/g/g3azem9gj.css';
import '../../css/z/z-dp3fbdb.css';
import '../../css/n/n5kknrbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f8_yxzbej"/><path class="g3azem9gj"/><path class="z-dp3fbdb"/><path class="n5kknrbif"/></g>`,
		"fallback": "streamline-freehand-color:role-playing-games-icon-weapon-equipment-crate-chest-1",
	});
}

export default Component;
