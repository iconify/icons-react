import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g022u5n-f.css';
import '../../css/o/o1l3xfb8l.css';
import '../../css/j/j0ba43ftm.css';
import '../../css/i/ibh56hv6u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpVM4sbHq"><g class="rohhhzb0l"><path class="g022u5n-f"/><path class="o1l3xfb8l"/><path class="j0ba43ftm"/><rect class="ibh56hv6u"/></g></mask></defs><path mask="url(#SVGpVM4sbHq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:seal",
	});
}

export default Component;
