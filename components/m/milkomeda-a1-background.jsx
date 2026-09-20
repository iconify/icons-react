import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.kbtbc5ksr {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.875 10.53L20 12.469l-5.924 3.403s-3.628 2.182-6.237-2.316l1.845-1.06s1.199 2.637 3.276 1.44z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.v-6mut0ta {
  fill: var(--svg-color--fff, #fff);
  d: path("M5.125 13.541L4 11.604l6.05-3.475s3.628-2.182 6.236 2.316l-1.845 1.06s-1.199-2.637-3.276-1.44z");
}

.z5nuq5b9d {
  fill: var(--svg-color--ff931e, #ff931e);
  d: path("M24 0H0v24h24z");
}

.zoq3_9bgb {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.114 13.494c.816 0 1.478-.659 1.478-1.47c0-.813-.662-1.472-1.478-1.472s-1.478.659-1.478 1.471s.662 1.47 1.478 1.47M6.895 15.79a.77.77 0 0 0 .772-.768a.77.77 0 0 0-.772-.768a.77.77 0 0 0-.772.768a.77.77 0 0 0 .772.768M17.2 9.87a.77.77 0 0 0 .771-.768a.77.77 0 0 0-.772-.768a.77.77 0 0 0-.772.768a.77.77 0 0 0 .772.768");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="z5nuq5b9d"/><path class="kbtbc5ksr"/><path class="v-6mut0ta"/><path class="zoq3_9bgb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:milkomeda-a1-background",
	});
}

export default Component;
