import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cflksfbjj.css';
import '../../css/m/mjfwmxbrm.css';
import '../../css/v/vsg7tgzjo.css';
import '../../css/v/va0oq6k-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGl5DUsIUC"><g class="ft5dv1b6b"><path class="cflksfbjj"/><path class="mjfwmxbrm"/><path class="vsg7tgzjo"/><path class="va0oq6k-z"/></g></mask></defs><path mask="url(#SVGl5DUsIUC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:soccer-one",
	});
}

export default Component;
