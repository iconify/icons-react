import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lgob9ib9a.css';
import '../../css/f/f8ajmabuk.css';
import '../../css/f/fnzhv2l2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsMi0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsMi0)"><path class="lgob9ib9a"/><path class="f8ajmabuk"/><path class="fnzhv2l2u"/></g>`,
		"fallback": "circle-flags:mi",
	});
}

export default Component;
