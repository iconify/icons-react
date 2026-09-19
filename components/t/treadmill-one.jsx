import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/z/zov5p_f0d.css';
import '../../css/j/jknat6yla.css';
import '../../css/l/lba8bpl1h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYHjHfc4y"><g class="cgga7abld"><path class="zov5p_f0d"/><path class="jknat6yla"/><path class="lba8bpl1h"/></g></mask></defs><path mask="url(#SVGYHjHfc4y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:treadmill-one",
	});
}

export default Component;
