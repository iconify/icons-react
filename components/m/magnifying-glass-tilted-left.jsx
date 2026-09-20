import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bx4_5gb8a {
  cx: 13.586px;
  cy: 13.669px;
  r: 13.5px;
  fill: var(--svg-color--8899a6, #8899a6);
}

.eucf_2qpw {
  fill: var(--svg-color--66757f, #66757f);
  d: path("m34.683 29.11l-5.879-5.879a2 2 0 0 0-2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l5.879 5.879a4 4 0 1 0 5.656-5.656");
}

.in564mtfc {
  cx: 13.586px;
  cy: 13.669px;
  r: 9.5px;
  fill: var(--svg-color--bbddf5, #bbddf5);
}

.z0ovj8orm {
  fill: var(--svg-color--9aaab4, #9aaab4);
  d: path("M27.388 24.642L24.56 27.47l-4.95-4.95l2.828-2.828z");
}
</style><path class="z0ovj8orm"/><path class="eucf_2qpw"/><circle class="bx4_5gb8a"/><circle class="in564mtfc"/>`,
		"fallback": "twemoji:magnifying-glass-tilted-left",
	});
}

export default Component;
