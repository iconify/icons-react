import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eotu-utgh.css';
import '../../css/w/wx1ng0jbd.css';
import '../../css/y/yuy95221j.css';
import '../../css/t/tyw9ksbjz.css';
import '../../css/i/i2omvzqbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="eotu-utgh"/><path class="wx1ng0jbd"/><path class="yuy95221j"/><path class="tyw9ksbjz"/><path class="i2omvzqbx"/></g>`,
		"fallback": "icon-park:thermos-cup",
	});
}

export default Component;
