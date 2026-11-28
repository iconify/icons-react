import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8b_njdtk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a3nlqvb5z.css';
import '../../css/f/ffnf2ab0y.css';
import '../../css/j/jdnh2xb9s.css';
import '../../css/t/twt2d5ihs.css';
import '../../css/h/h9pmkbc5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8b_njdtk secondary"/><g class="dt0cm9dhy primary"><path class="a3nlqvb5z"/><path class="ffnf2ab0y"/><path class="jdnh2xb9s"/><path class="twt2d5ihs"/><path class="h9pmkbc5m"/></g>`,
		"fallback": "iconaut:sunset-duo",
	});
}

export default Component;
